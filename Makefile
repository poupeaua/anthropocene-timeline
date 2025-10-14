include .env

clean:
	@echo "------------------"
	@echo "Cleaning operation"
	@echo "------------------"
	rm .hugo_build.lock || true
	rm ${HUGO_RELEASE_FILE_LINUX} || true
	rm ${HUGO_RELEASE_FILE_MAC} || true

install-linux:
	@echo "-------------------------------------------------"
	@echo "Installing Hugo version v${HUGO_VERSION} on Linux"
	@echo "-------------------------------------------------"
	@echo "We suppose you work on ubuntu or debian (for windows use WSL)"
	wget https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${HUGO_RELEASE_FILE_LINUX}
	sudo dpkg -i ${HUGO_RELEASE_FILE_LINUX}
	dpkg -s hugo
	which hugo
	hugo version
	@echo "Successfully installed Hugo version ${HUGO_VERSION}!"

install-mac:
	@echo "-------------------------------------------------"
	@echo "Installing Hugo version v${HUGO_VERSION} on MacOS"
	@echo "-------------------------------------------------"
	@echo "We suppose you work on MAC OS"
	wget https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${HUGO_RELEASE_FILE_MAC}
	mkdir -p ${HUGO_DOWNLOAD_DIR}
	tar -xvzf ${HUGO_RELEASE_FILE_MAC} -C ${HUGO_DOWNLOAD_DIR}
	@echo "TODO Copy and run:"
	@echo "source .env"
	@echo "export PATH=\"${HUGO_DOWNLOAD_DIR}:${PATH}\" >> ~/.zshrc"
	echo "BEWARE: Validate the execution of the executable in MAC security settings"
	@echo "Successfully installed Hugo version ${HUGO_VERSION}!"

local:
	@echo "----------------------------------------------------------------------------------------------------------"
	@echo "Testing the website in local for quick test with changes in code automatically applied in rendered website"
	@echo "----------------------------------------------------------------------------------------------------------"
	@echo "Deployed on port ${TEST_PORT} + enable binding to test on other interfaces"
	hugo server -D --baseURL ${LOCALHOST_URL}:${TEST_PORT}/ --bind 0.0.0.0

preprod:
	@echo "----------------------------------------------------------------------------------------------------------"
	@echo "Testing the website in pre-production mode: The website will render as-is in the production environment"
	@echo "----------------------------------------------------------------------------------------------------------"
	@echo "Deployed on port ${PREPROD_PORT}"
	# auto cleaning of directory docs/ after CTRL-C in Make
	bash -c "trap 'rm -r docs/' EXIT; bash .exec/preprod.sh"

latest:
	@echo "---------------------------------------------------------------------"
	@echo "Testing the latest version of Hugo using the latest Hugo Docker Image"
	@echo "---------------------------------------------------------------------"
	@echo "This is useful to test that the new version of Hugo does not break your website before downloading it and working with it for real"
	@echo "Deployed on port ${DOCKER_PORT} so that you can have both the website on the current Hugo version on port ${TEST_PORT} and the latest Hugo version on port ${DOCKER_PORT} to compare"
	docker image rm ${DOCKER_IMAGE_ID} || (echo "Image ${DOCKER_IMAGE} didn't exist so not removed."; exit 0)
	docker build . -t ${DOCKER_IMAGE} --progress plain
	docker run -p ${DOCKER_PORT}:80 --name ${DOCKER_CONTAINER} --rm ${DOCKER_IMAGE}
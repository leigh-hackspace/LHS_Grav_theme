# Leigh Hackspace Grav


## Dev Environment

To run Grav locally, you'll need Docker installed. 

* First, build the Grav Docker image: 

    ```console
    $ git pull https://github.com/getgrav/docker-grav
    $ cd docker-grav
    $ docker build -t grav:latest .
    ```
* Create a `accounts` folder: `mkdir accounts`

    ```console
    $ mkdir accounts
    ```

* Run the Grav container, pointing at the root of this repo for the data filemount: 

    ```console
    docker run -it --mount=type=bind,source=$(pwd),target=/var/www/html/user -p 8000:80 grav:latest
    ```
* Goto `https://127.0.0.1:8000` in your browser.
* You'll be prompted to create an account, fill in the details and click 'Create User'
* Done!
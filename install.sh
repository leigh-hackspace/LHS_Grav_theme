#!/bin/bash

# Check if the system is macOS or Linux
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    echo "Detected macOS. Installing Docker Compose..."
    if [ ! -x "$(command -v docker-compose)" ]; then
        # Install Docker Compose for macOS
        brew install docker-compose
    else
        echo "Docker Compose is already installed."
    fi
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    echo "Detected Linux. Installing Docker Compose..."
    if [ ! -x "$(command -v docker-compose)" ]; then
        # Install Docker Compose for Linux
        sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
        sudo chmod +x /usr/local/bin/docker-compose
    else
        echo "Docker Compose is already installed."
    fi
else
    echo "Unsupported operating system: $OSTYPE"
    exit 1
fi

# Verify the installation
docker-compose --version

echo "Docker Compose installation completed."

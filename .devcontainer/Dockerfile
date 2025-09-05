# Use a Microsoft-provided base image with Python & basic tools (Debian bullseye)
FROM mcr.microsoft.com/devcontainers/base:bullseye

ENV DEBIAN_FRONTEND=noninteractive

# OS deps + Python + PHP + build tools
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates curl gnupg unzip \
    python3 python3-pip python3-venv \
    php php-cli php-mbstring \
    build-essential gdb nasm \
 && rm -rf /var/lib/apt/lists/*

# PHP Composer
RUN curl -fsSL https://getcomposer.org/installer \
  | php -- --install-dir=/usr/local/bin --filename=composer

# Node.js 22 (NodeSource) + latest npm + yarn + CODEX CLI
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
 && apt-get update && apt-get install -y --no-install-recommends nodejs \
 && npm i -g  npm@latest yarn @openai/codex \
 && rm -rf /var/lib/apt/lists/*

# Clean PATH (NodeSource already puts node/npm on PATH)
ENV PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
ENV LANG=C.UTF-8


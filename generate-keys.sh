#!/bin/bash

# Script para generar claves secretas para Strapi .env

echo "🔑 Generando claves secretas para Strapi..."
echo ""
echo "Copia estos valores en tu archivo .env:"
echo ""
echo "APP_KEYS=$(openssl rand -base64 32),$(openssl rand -base64 32),$(openssl rand -base64 32),$(openssl rand -base64 32)"
echo "API_TOKEN_SALT=$(openssl rand -base64 32)"
echo "ADMIN_JWT_SECRET=$(openssl rand -base64 32)"
echo "TRANSFER_TOKEN_SALT=$(openssl rand -base64 32)"
echo "JWT_SECRET=$(openssl rand -base64 32)"
echo ""
echo "✅ Claves generadas!"

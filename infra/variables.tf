variable "resource_group_name" {
  description = "The name of the resource group"
  default     = "portfolio"
}

variable "location" {
  description = "The Azure region to deploy resources"
  default     = "Central India"
}

variable "vnet_name" {
  description = "The name of the virtual network"
  default     = "portfolio-vnet"
}

variable "acr_name" {
  description = "The name of the Azure Container Registry"
  default     = "personalportfolio"
}

variable "aks_name" {
  description = "The name of the Azure Kubernetes Service cluster"
  default     = "personal-portfolio"
}

variable "dns_prefix" {
  description = "The DNS prefix for the AKS cluster"
  default     = "personal-portfolio"
}

variable "node_count" {
  description = "The number of nodes in the AKS cluster"
  default     = 1
}

variable "vm_size" {
  description = "The size of the virtual machines in the AKS cluster"
  default     = "Standard_D2as_v5"
}

variable "app_gateway_name" {
  description = "The name of the Application Gateway"
  default     = "app-gateway"
}

variable "app_gateway_subnet_prefix" {
  description = "The subnet prefix for the Application Gateway"
  default     = "10.0.2.0/24"
}
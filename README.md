# fullstack-eks-app-pablotonelli
Aplicación full stack con Kubernetes, Minikube y Amazon EKS

Este proyecto consiste en la migración de una aplicación full stack (frontend + backend) desde un entorno local con Minikube hacia un entorno cloud productivo en AWS utilizando Kubernetes (EKS).

---

## 📦 Arquitectura de la aplicación

La aplicación incluye:

- Frontend estático servido con Nginx  
- Backend API en Node.js  
- Comunicación entre frontend y backend vía Kubernetes Services  
- Exposición pública mediante AWS LoadBalancer  

---

## 🛠️ Tecnologías utilizadas

- AWS EKS  
- AWS ECR  
- Docker  
- Kubernetes (kubectl)  
- Node.js  
- Nginx  
- PowerShell / Bash  
- eksctl  

---

## 🐳 Docker

### Build de imágenes

```bash
docker build -t backend ./backend
docker build -t frontend ./frontend
```

### Tag para AWS ECR

```bash
docker tag backend-login:v1 <ECR_URL>/backend-login:latest
docker tag frontend-login:v3 <ECR_URL>/frontend-login:latest
```

### Push a ECR

```bash
docker push <ECR_URL>/backend-login:latest
docker push <ECR_URL>/frontend-login:latest
```

---

## ☸️ Kubernetes (EKS)

### Deploy de la aplicación

```bash
kubectl apply -f k8s/
```

### Ver estado de los recursos

```bash
kubectl get pods
kubectl get services
```

---

## 🌐 Exposición de la aplicación

El frontend se expone mediante AWS LoadBalancer:

```
http://<elb-dns>.us-east-1.elb.amazonaws.com
```

---

## 🔄 Flujo de despliegue

1. Desarrollo local (Minikube)  
2. Dockerización de frontend y backend  
3. Push de imágenes a AWS ECR  
4. Creación de cluster EKS  
5. Creación de NodeGroups  
6. Deploy en Kubernetes  
7. Exposición con LoadBalancer  
8. Validación funcional  

## 🚀 Flujo rápido de despliegue cada vez que cambio el FRONT:

1. **Construir imágenes Docker**
   ```bash
   docker build -t backend ./backend
   docker build -t frontend ./frontend
   ```

2. **Etiquetar imágenes para ECR**
   ```bash
   docker tag backend-login:v1 <ECR_URL>/backend-login:latest
   docker tag frontend-login:v3 <ECR_URL>/frontend-login:latest
   ```

3. **Subir imágenes a ECR**
   ```bash
   docker push <ECR_URL>/backend-login:latest
   docker push <ECR_URL>/frontend-login:latest
   ```

4. **Reiniciar despliegues en Kubernetes**
   ```bash
   kubectl rollout restart deployment backend
   kubectl rollout restart deployment frontend
   ```

from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import CustomUser
from .serializers import *
from rest_framework.response import Response

# Create your views here.


class RegisterViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.error, status=400)



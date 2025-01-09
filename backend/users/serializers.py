from rest_framework import serializers
from .models import *


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            "id",
            "fullName",
            "email",
            "password",
            "userType",
            "department",
            "program",
        ]
        extra_kwargs = {"password": {"write_only": True}}

    def validate(self, data):
        if data["userType"] == "Teacher" and not data.get("department"):
            raise serializers.ValidationError("Department is required for Teachers")
        if data["userType"] == "Student" and not data.get("program"):
            raise serializers.ValidationError("Program is required for Students")
        return data

    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        return user

        
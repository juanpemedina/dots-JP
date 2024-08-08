from rest_framework import serializers
from .models import Incoming, Item, IncomingHaveItem
from django.contrib.auth import get_user_model


# Serializer for user registration
class UserRegistrationSerializer(serializers.ModelSerializer):
    # Define password field
    password = serializers.CharField(max_length=100, min_length=8, style={'input_type': 'password'})
    is_administrator = serializers.BooleanField(default=False)
    is_volunteer = serializers.BooleanField(default=False)

    class Meta:
        # Specify the model to be used by the serializer
        model = get_user_model()
        # Define fields to include in the serializer
        fields = ['email', 'username', 'password', 'is_administrator', 'is_volunteer']
        
    # Method to create a new user
    def create(self, validated_data):
        # Retrieve and hash the password
        user_password = validated_data.get('password', None)
        # Create a new user instance with provided data
        db_instance = self.Meta.model(email=validated_data.get('email'), 
                                    username=validated_data.get('username'))
        db_instance.set_password(user_password)
        db_instance.save()
        return db_instance

# Create a new user instance with provided data
class UserLoginSerializer(serializers.Serializer):
    # Define fields for user login
    email = serializers.CharField(max_length=100)
    username = serializers.CharField(max_length=100, read_only=True)
    password = serializers.CharField(max_length=100, min_length=8, style={'input_type': 'password'})
    token = serializers.CharField(max_length=255, read_only=True)

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = "__all__"


class IncomingHaveItemSerializer(serializers.ModelSerializer):
    item = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = IncomingHaveItem
        fields = ["item", "quantity"]


class IncomingSerializer(serializers.ModelSerializer):
    incominghaveitem_set = IncomingHaveItemSerializer(many=True)

    class Meta:
        model = Incoming
        fields = ["authorizingVolunteer", "donor", "date", "incominghaveitem_set", "id"]

    def create(self, validated_data):
        items_data = validated_data.pop("incominghaveitem_set")
        incoming = Incoming.objects.create(**validated_data)
        for item_data in items_data:
            IncomingHaveItem.objects.create(incoming=incoming, **item_data)
        return incoming

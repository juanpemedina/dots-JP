from rest_framework import serializers
from .models import Incoming, Item, IncomingHaveItem
from django.contrib.auth import get_user_model


class UserRegistrationSerializer(serializers.ModelSerializer):
	password = serializers.CharField(max_length=100, min_length=8, style={'input_type': 'password'})
	class Meta:
		model = get_user_model()
        fields = ['username', 'password']
        
	def create(self, validated_data):
        username = validated_data.get('username')
        password = validated_data.get('password')
        db_instance = self.Meta.model(username=username)
        db_instance.set_password(password)
		db_instance.save()
		return db_instance



class UserLoginSerializer(serializers.Serializer):
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

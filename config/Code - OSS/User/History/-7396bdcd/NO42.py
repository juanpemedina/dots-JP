from rest_framework import serializers
from .models import Incoming, Item, IncomingHaveItem  
#from django.contrib.auth.models import Group, User # Django imports for serializing default User and Group models
from django.contrib.auth import get_user_model, authenticate

UserModel = get_user_model()

class UserRegisterSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserModel
		fields = '__all__'
	def create(self, clean_data):
		user_obj = UserModel.objects.create_user(email=clean_data['email'], password=clean_data['password'])
		user_obj.username = clean_data['username']
		user_obj.save()
		return user_obj

class UserLoginSerializer(serializers.Serializer):
	email = serializers.EmailField()
	password = serializers.CharField()
	def check_user(self, clean_data):
		user = authenticate(username=clean_data['email'], password=clean_data['password'])
		if not user:
			raise ValidationError('user not found')
		return user

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserModel
		fields = ('email', 'username')

# Serializer for the User model
# class UserSerializer(serializers.ModelSerializer):
#   class Meta:
#        model = User
#        fields = ['url', 'username', 'email', 'groups']

# Serializer for the Group model  
#class GroupSerializer(serializers.ModelSerializer):
#    class Meta:
#        model = Group
#        fields = ['url', 'name']

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

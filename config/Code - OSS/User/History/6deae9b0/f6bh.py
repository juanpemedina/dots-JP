from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

# Custom user manager, for CustomUser model
class CustomUserManager(BaseUserManager):
    # Method create regular user
    def create_user(self, username, password=None):
        # Validate username
        if not username:
            raise ValueError('A username is required.')

        # Normalize email and create user instance
        user = self.model(username=username)        
        user.set_password(password)
        user.save()
        # user.save(using=self._db)
        return user

    # Method to create a superuser
    def create_superuser(self, username, password=None):
        # Create a regular user and set superuser and staff status
        user = self.create_user(email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        return user

        user = self.create_user(username, password=password)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        # user.save(using=self._db)
        return user


# Create a regular user and set superuser and staff status
class User(AbstractBaseUser, PermissionsMixin):
    # Define fields for the custom user model
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=100, unique=True)
    username = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    # Define field for the permisions and role management
    is_administrator = models.BooleanField(default=False)
    is_volunteer = models.BooleanField(default=False)     

    date_joined = models.DateField(auto_now_add=True)
    # Set the email field as the unique identifier
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = CustomUserManager()  # Set the custom user manager for the model

    def __str__(self):
        return self.email



class Category(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

    def __str__(self):
        return self.name
    

class Notifications(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.title


class Item(models.Model):
    photo = models.CharField(max_length=300)
    name = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Incoming(models.Model):
    authorizing_volunteer = models.CharField(max_length=50)
    donor = models.CharField(max_length=100)
    date = models.DateTimeField()
    items = models.ManyToManyField(Item, through="IncomingHaveItem")

    class Meta:
        ordering = ["-date"]

    def __str__(self):
        return str(self.donor)


class IncomingHaveItem(models.Model):
    incoming = models.ForeignKey(Incoming, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.IntegerField()

    def __str__(self):
        return str(self.item)


class Outgoing(models.Model):
    authorizing_volunteer = models.CharField(max_length=50)
    patient_number = models.CharField(max_length=100)
    date = models.DateTimeField()
    items = models.ManyToManyField(Item, through="OutgoingHaveItem")

    class Meta:
        ordering = ["-date"]

    def __str__(self):
        return str(self.patient_number)


class OutgoingHaveItem(models.Model):
    outgoing = models.ForeignKey(Outgoing, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.IntegerField()

    def __str__(self):
        return str(self.item)


class Loan(models.Model):
    authorizing_volunteer = models.CharField(max_length=50)
    patient_number = models.CharField(max_length=100)
    date = models.DateTimeField()
    state = models.BooleanField(default=False)
    items = models.ManyToManyField(Item, through="LoanHaveItem")

    class Meta:
        ordering = ["-date"]

    def __str__(self):
        return str(self.patient_number)


class LoanHaveItem(models.Model):
    loan = models.ForeignKey(Loan, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.IntegerField()

    def __str__(self):
        return str(self.item)

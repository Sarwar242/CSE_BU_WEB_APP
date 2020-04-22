from django.contrib.auth.models import User
from django.db import models

sex_choice = (
    ('Male', 'Male'),
    ('Female', 'Female'),
    ('Others', 'Others')
)
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    department = models.CharField(max_length=200, default='Computer Science & Engineering')
    is_teacher = models.BooleanField(default=False)
    is_student = models.BooleanField(default=True)
    name = models.CharField(max_length=100)
    sex = models.CharField(max_length=50, choices=sex_choice, default='Male')
    DOB = models.DateField(default='1990-01-01')

    def __str__(self):
        return '{}'.format(self.user)
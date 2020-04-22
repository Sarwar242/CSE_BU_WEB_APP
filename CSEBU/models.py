from django.db import models

class About(models.Model):
    title = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return '{}'.format(self.title)

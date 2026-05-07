from django.db import models

class Tarea(models.Model):
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField()
    materia = models.CharField(max_length=100)
    profesor = models.CharField(max_length=100)
    fecha_entrega = models.DateField()

    def __str__(self):
        return self.titulo
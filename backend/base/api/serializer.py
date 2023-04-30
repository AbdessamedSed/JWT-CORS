from rest_framework.serializers import ModelSerializer
from base.models import Note


class NoteSerializer(ModelSerialiser):
    class Meta:
        model = Note
        files = '__all__'

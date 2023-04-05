import { useState } from 'react'
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Participant } from '../components/Participant'

import { styles } from './styles'

export function Home(): JSX.Element {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState<string>('')

  function handleParticipantAdd(): void {
    if (!participantName.length) {
      return
    }

    if (participants.includes(participantName.trim())) {
      return Alert.alert('Participante existe', 'Já existe um participante na lista com este nome.')
    }

    setParticipants(prevState => [...prevState, participantName.trim()])
    setParticipantName('')
  }

  function removeParticipant(name: string): void {
    setParticipants(prevState => prevState.filter((participant) => participant !== name))
  }

  function handleParticipantRemove(name: string): void {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          removeParticipant(name)
          return Alert.alert('Deletado!')
        },
        style: 'default'
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          // onChangeText={(text) => setParticipantName(text)}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}

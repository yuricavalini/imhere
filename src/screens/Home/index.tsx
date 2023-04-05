import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Participant } from '../components/Participant'

import { styles } from './styles'

export function Home(): JSX.Element {
  const participants = ['Yuri 1', 'Yuri 2', 'Yuri 3', 'Yuri 4', 'Yuri 5', 'Yuri 6', 'Yuri 7', 'Yuri 8', 'Yuri 9', 'Yuri 10']

  function handleParticipantAdd(): void {
    if (participants.includes('Yuri 5')) {
      return Alert.alert('Participante existe', 'Já existe um participante na lista com este nome.')
    }
  }

  function handleParticipantRemove(name: string): void {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!')
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

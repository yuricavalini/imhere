import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Participant } from '../components/Participant'

import { styles } from './styles'

export function Home(): JSX.Element {
  function handleParticipantAdd(): void {
    console.log('Você clicou no botão de Adicionar!')
  }

  function handleParticipantRemove(name: string): void {
    console.log('teste')
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

      <Participant
      name="Yuri 1"
      onRemove={() => handleParticipantRemove('Yuri') }
      />
      <Participant
      name="Yuri 2"
      onRemove={() => handleParticipantRemove('Yuri 2') }
      />
      <Participant
      name="Yuri 3"
      onRemove={() => handleParticipantRemove('Yuri 3') }
      />
    </View>
  )
}

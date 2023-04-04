import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export function Participant(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        Yuri Cavalini
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}

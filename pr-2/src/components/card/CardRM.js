import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './Card.style';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Card, IconButton } from 'react-native-paper';

export default function CardRM(props) {
  const { characters } = props;
  const navigation = useNavigation();

  const goToPersonaje = () => {
    navigation.navigate('Detail', {
      id: characters.id,
      name: characters.name,
      status: characters.status,
      species: characters.species,
      type: characters.type,
      image: characters.image,
      gender: characters.gender,
      origin: characters.origin.name,
    })

  }
  return (
    <TouchableOpacity onPress={goToPersonaje} style={styles.container}>
      <Card.Title
        title={characters.name}
        subtitle={characters.species}
        style={styles.card}
        titleStyle={{ marginLeft: 8, color: '#fff', fontSize: 20, fontWeight: 'bold' }}
        subtitleStyle={{ marginLeft: 8, color: '#fff' }}
        right={(props) => <Avatar.Image source={{ uri: characters.image }} style={styles.avatarImg} />}
        left={(props) => <Text style={{ marginLeft: 0, fontSize: 13, color: '#ab49cc', fontWeight: 'bold' }}>
          #{`${characters.id}`.padStart(1, '0')}
        </Text>}
      />
    </TouchableOpacity>
  )
}

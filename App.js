import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json'

export default function App() {

  const exercise = exercises[0];


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
          data={exercises}
          renderItem={({ item }) => (
            <View style={styles.exerciseContainer}>
              <Text style={styles.exerciseName}>{exercise.name}</Text>
              <Text style={styles.exerciseSubtitle}>
                {exercise.muscle.toLocaleUpperCase()} |{' '}
                {exercise.equipment.toLocaleUpperCase()}
              </Text>
            </View>
          )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    padding: 10,
  },
  exerciseContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: '500',
  },
  exerciseSubtitle: {
    color: 'dimgray',
  },
});

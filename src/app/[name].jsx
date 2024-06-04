import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Pressable } from 'react-native';
// import ExerciseListItem from './components/ExerciseListItem';
import exercises from '../../assets/data/exercises.json';

const ExerciseDetailsScreen = () => {
    const [isInstructionExpanded, setIsInstructionExpanded] = useState(false);

    const params = useLocalSearchParams();

    const exercise = exercises.find((item) => item.name === params.name);

    // might break
    !exercise && <Text>Exercise not found.</Text>;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{ title: exercise.name }} />

            <View style={styles.panel}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exerciseSubtitle}>
                    {exercise.muscle} | {exercise.equipment}
                </Text>
            </View>
            <View style={styles.panel}>
                <Text style={styles.instructions} numberOfLines={isInstructionExpanded ? 0 : 3}>
                    {exercise.instructions}
                </Text>
                <Text onPress={() => setIsInstructionExpanded((v) => !v)} style={styles.seeMore}>
                     {isInstructionExpanded ? 'See less' : 'See more'}
                </Text>
            </View>
        </ScrollView>
    );
};

export default ExerciseDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'ghostwhite',
        padding: 10,
        gap: 10,
    },
    exerciseName: {
        fontSize: 20,
        fontWeight: '500',
    },
    exerciseSubtitle: {
        color: 'dimgray',
        textTransform: 'capitalize',
    },
    instructions: {
        fontSize: 16,
        lineHeight: 22,
    },
    panel: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    seeMore: {
        alignSelf: 'center',
        padding: 5,
        fontWeight: '600',
        color: 'gray',
    },
});

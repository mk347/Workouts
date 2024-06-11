import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Pressable, ActivityIndicator } from 'react-native';
// import ExerciseListItem from './components/ExerciseListItem';
import exercises from '../../assets/data/exercises.json';
import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import client from '../graphql/graphqlClient';

const exerciseQuery = gql`
    query exercises($name: String) {
        exercises(name: $name) {
            name
            muscle
            instructions
            equipment
        }
    }
`;

const ExerciseDetailsScreen = () => {
    const { name } = useLocalSearchParams();
    const { data, isLoading, error } = useQuery({
        queryKey: ['exercises', name],
        queryFn: () => client.request(exerciseQuery, {name}),
    });

    const [isInstructionExpanded, setIsInstructionExpanded] = useState(false);

    if (isLoading) {
        return <ActivityIndicator />;
    }

    if (error) {
        return console.log(error.message);
    }

    const exercise = data.exercises[0];

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

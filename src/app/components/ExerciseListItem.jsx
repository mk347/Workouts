import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

const ExerciseListItem = ({ item }) => {
    return (
        <Link href={`/${item.name}`} asChild>
            <Pressable style={styles.exerciseContainer}>
                <Text style={styles.exerciseName}>{item.name}</Text>
                <Text style={styles.exerciseSubtitle}>
                    {item.muscle} | {item.equipment}
                </Text>
            </Pressable>
        </Link>
    );
};

export default ExerciseListItem;

const styles = StyleSheet.create({
    exerciseContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        gap: 5,
        marginHorizontal: 2,

        // Shadow
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    exerciseName: {
        fontSize: 20,
        fontWeight: '500',
    },
    exerciseSubtitle: {
        color: 'dimgray',
        textTransform: 'capitalize',
    },
});

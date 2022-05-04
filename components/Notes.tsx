import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { note, notesContext } from '../utils/notesContext';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { deleteNote } from '../utils/Local/Storage';

const styles = StyleSheet.create({
	todo: {
		color: 'black',
		marginLeft: 1,
		marginRight: 1,
		borderWidth:1,
		borderTopColor:'transparent',
		borderLeftColor:'transparent',
		borderRightColor:'transparent',
		fontSize: 20,
		fontWeight:'bold',
		margin: 10,
		padding:10,
		paddingBottom: 10,
		borderBottomWidth: 1,
	},
	deleteIcon: {
		marginRight: 20,
	},
});

const Notes = ({ navigation }: { navigation: any }) => {
	const { notes, setNotes } = useContext(notesContext);
	const alertDelete = (id: string) => {
		Alert.alert(
			'Delete Note',
			"Are you sure you want to delete this note?",
			[
				{
					text: 'Cancel',
					style: 'cancel',
				},
				{
					text: 'Delete',
					onPress: () => {
						setNotes(
							notes.filter((filteredItems) => {
								return filteredItems.id != id;
							})
						);
						deleteNote(id);
					},
					style: 'destructive',
				},
			],
			{
				cancelable: true,
			}
		);
	};

	return (
		<View>
			{notes?.map((item: note, index: number) => {
				return (
					<View key={index.toString()}>
						<TouchableWithoutFeedback
							onPress={() => {
								navigation.navigate('Note', {
									id: notes[index].id,
									note: notes[index],
								});
							}}
							onLongPress={() => {
								alertDelete(item.id);
							}}
						>
							<Text style={styles.todo} key={index.toString()}>
								{item.title}
							</Text>
						</TouchableWithoutFeedback>
					</View>
				);
			})}
		</View>
	);
};

export default Notes;

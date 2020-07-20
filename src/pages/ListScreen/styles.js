import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    backgroundColor: #333;
    justifyContent: center;
    alignItems: center;
`;

export const AddButton = styled.TouchableHighlight`
    marginRight: 15px;
`;

export const AddButtonImage = styled.Image`
    width: 24px;
    height: 24px;    
`;

export const NotesList = styled.FlatList`
    flex:1;
    width: 100%;    
`;

export const NoNotes = styled.View`
    justifyContent: center;
    alignItems: center
`;
export const NoNotesImage = styled.Image`
    width: 50px;
    height: 50px;
    marginBottom: 10px;
`;

export const NoNotesText = styled.Text`
fontSize: 20px;
colot #FFF;
`;


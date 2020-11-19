import { TextBlock } from '../../designSystem/theme';
import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';

export interface CreateNoteProps {
  isVisible: boolean;
  onClose: (arg0: boolean) => void;
}

const CreateNote = ({ isVisible, onClose }: CreateNoteProps) => {
  return (
    <View>
      <Modal
        isVisible={isVisible}
        onSwipeComplete={() => onClose(false)}
        swipeDirection="down"
        onBackdropPress={() => onClose(false)}
        coverScreen={true}
      >
        <View>
          <TextBlock backgroundColor="noteCardBackground">
            I am the modal content!
          </TextBlock>
        </View>
      </Modal>
    </View>
  );
};

export default CreateNote;

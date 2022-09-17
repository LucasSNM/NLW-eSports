import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Entypo } from '@expo/vector-icons'

import { styles } from './styles';
import { THEME } from '../../theme';
import { CheckCircle } from 'phosphor-react-native'
import { Heading } from '../Heading';

import * as Clipboard from 'expo-clipboard';
import { useState } from 'react';

interface Props extends ModalProps {
    discord: string;
    onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
    const [isCopping, setIsCopping] = useState(false)

    async function handleCopyDiscordToClipboard(discord: string) {
        setIsCopping(true)
        await Clipboard.setStringAsync(discord)

        Alert.alert('Discord Copiado!', 'Usuários copiado para o seu clipboard')
        setIsCopping(false)
    }

    return (
        <Modal
            animationType='fade'
            statusBarTranslucent
            transparent
            {...rest}
        >
            <View style={styles.container}>
                <View style={styles.modal}>
                    <TouchableOpacity
                        style={styles.closeIcon}
                        onPress={onClose}
                    >
                        <Entypo
                            name="cross"
                            color={THEME.COLORS.CAPTION_300}
                            size={25}
                        />
                    </TouchableOpacity>
                    <CheckCircle
                        size={64}
                        color={THEME.COLORS.SUCCESS}
                        weight="bold"
                    />
                    <Heading
                        title="Lets's Play!"
                        subtitle='Agora é só começar a jogar!'
                        style={{ alignItems: 'center', marginTop: 24 }}
                    />

                    <Text style={styles.discordTitle}>
                        Adicione no Discord
                    </Text>

                    <TouchableOpacity
                        style={styles.discord}
                        onPress={() => handleCopyDiscordToClipboard(discord)}
                        disabled={isCopping}
                    >
                        <Text
                            style={{
                                color: THEME.COLORS.TEXT,
                                fontSize: THEME.FONT_SIZE.MD,
                                fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
                                textAlign: 'center',
                            }}
                        >
                            {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : discord}
                            {/* {discord} */}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
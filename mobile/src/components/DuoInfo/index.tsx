import { View, Text, ViewProps, ColorValue } from 'react-native'
import { THEME } from '../../theme';

import { styles } from './styles'

interface Props extends ViewProps {
    title: string;
    subtitle: string;
    colorValue?: ColorValue;
}

export function DuoInfo({ title, subtitle, colorValue = THEME.COLORS.TEXT}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title} numberOfLines={1}>
                {title}
            </Text>
            <Text style={[styles.subtitle, {color: colorValue}]} numberOfLines={1}>
                {subtitle}
            </Text>
        </View>
    )
}
import * as React from 'react';
import { KeyboardAvoidingView, Platform, StyleProp, StyleSheet, ViewStyle, SafeAreaView } from "react-native";
import Loader from "./Loader";
import { HeaderHeightContext } from "@react-navigation/elements";

interface HeaderProps {
    children: React.ReactNodeArray | React.ReactNode,
    style?: StyleProp<ViewStyle>,
    loading: boolean,
}


export default function ViewWithLoading({ children, style, loading }: HeaderProps) {
    return (
        <HeaderHeightContext.Consumer>
            {headerHeight => (
                <KeyboardAvoidingView
                    style={[style, {
                        flex: 1,
                    }]}
                    behavior={Platform.select({ android: 'height' })}
                    keyboardVerticalOffset={(headerHeight || 0)}
                >
                    <SafeAreaView style={[styles.container, {
                        flex: 1,
                        zIndex: 1,
                        backgroundColor: "white"
                    }]}>
                        {children}
                        {loading && <Loader />}
                    </SafeAreaView>
                </KeyboardAvoidingView>
            )}
        </HeaderHeightContext.Consumer>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

function setLoading(arg0: boolean): void {
    throw new Error('Function not implemented.');
}
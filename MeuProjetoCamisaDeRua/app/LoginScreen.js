// LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          {/* Lado da imagem */}
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "https://i.imgur.com/hw7M2rC.jpeg" }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>

          {/* Lado do formulário */}
          <View style={styles.formContainer}>
            <Text style={styles.logo}>CAMISA DE RUA</Text>

            <TextInput
              style={styles.input}
              placeholder="Login"
              placeholderTextColor="#777"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#777"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>

            <Text style={styles.registerText}>
              Não tem uma conta?{" "}
              <Text
                style={styles.registerLink}
                onPress={() => navigation.navigate("Registro")}
              >
                Criar conta
              </Text>
            </Text>

            <Text style={styles.orText}>OU</Text>

            <TouchableOpacity style={styles.googleButton}>
              <Text style={styles.googleText}>Entrar com o Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  formContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#e9f0eb",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  logo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#1b2e1b",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#1b2e1b",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerText: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: 10,
  },
  registerLink: {
    color: "#1b2e1b",
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    color: "#555",
  },
  googleButton: {
    borderWidth: 1,
    borderColor: "#333",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  googleText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
});

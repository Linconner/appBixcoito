import React, { Component } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numeroSorteado: null,
      img: require('./src/fechado.png')
    };

    this.sortearNumero = this.sortearNumero.bind(this);
    this.resetarImagem = this.resetarImagem.bind(this);

    this.imagens = [
      require('./src/ana castela.jpg'),
      require('./src/anita.jpg'),
      require('./src/jiafei.jpg'),
      require('./src/saori&diana.webp'),
      require('./src/ygonna.jpg')
    ];
  }

  sortearNumero() {
    let numAleatorio = Math.floor(Math.random() * 5);

    this.setState({
      numeroSorteado: numAleatorio + 1,
      img: this.imagens[numAleatorio]
    });
  }

  resetarImagem() {
    this.setState({
      numeroSorteado: null,
      img: require('./src/fechado.png')
    });
  }

  render() {
    return (
      <View style={estilos.container}>
        <Text style={estilos.titulo}>Qual queen da Floptropica você seria?</Text>

        <Image
          source={this.state.img}
          style={estilos.img}
        />

        <Text style={estilos.texto}>Número sorteado: {this.state.numeroSorteado}</Text>

        <TouchableOpacity style={estilos.botao} onPress={this.sortearNumero}>
          <View style={estilos.btnArea}>
            <Text style={estilos.btnTexto}>Sortear Prêmio</Text>
          </View>
        </TouchableOpacity>

        {this.state.numeroSorteado !== null && (
          <TouchableOpacity style={estilos.botao} onPress={this.resetarImagem}>
            <View style={estilos.btnArea}>
              <Text style={estilos.btnTexto}>Resetar</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 24,
    color: '#dd7b22',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  img: {
    width: 250,
    height: 250,
    marginBottom: 20
  },
  texto: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 10,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#eeab22',
    borderRadius: 25,
    backgroundColor: '#dd7b22',
    marginVertical: 10
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  }
});

export default App;

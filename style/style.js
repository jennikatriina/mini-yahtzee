import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8e6e6',
    alignItems: 'center',
    paddingTop: 20,
    padding: 40
  },
  header: {
    marginTop: 30,
    marginBottom: 5,
    flexDirection: 'row',
  },
  footer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },
  title: {
    color: '#000000',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#000000',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  player: {
    fontSize: 20,
    padding: 10
  },
  gameboard: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameinfo: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10,
    height: 'auto',
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#edc0c0",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20,
  },
  points: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 15,
    textAlign: 'center'
  },
  dicepoints: {
    flexDirection: 'row',
    width: 280,
    alignContent: 'center'
  },
  home: {
    flex: 1,
    alignItems: 'center',
  },
  instructions: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  scoreboard: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    paddingTop: 30,
    paddingBottom: 30
  },
  topSeven: {
    fontSize: 35,
    paddingBottom: 20
  },
  total: {
    fontSize: 25,
    paddingTop: 25
  }
});
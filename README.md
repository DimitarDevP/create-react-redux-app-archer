# Basic boilerplate react-redux application with boilerplate code.

# To install:
 - git clone https://github.com/DimitarDevP/create-react-redux-app-archer.git
 - cd ./create-react-redux-app-archer/
 - npm install
 
# To run:
 - npm start
 
The App component is connected to the redux store. To remove it, replace delete the mapStateToProps and mapDispatchToProps functions at the bottom of the App.js file and remove the connect wrapper around the App export.
There are BasicReducer and BasicActions files in the redux folder. To remove them, delete the files and remove the import and the reference of the BasicReducer from the RootReducer file.

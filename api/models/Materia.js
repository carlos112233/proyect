/**
 * Materia.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
autoCreatedAt: false,
autoUpdatedAt: false,
  attributes: {
     id_materia: {
            type: 'int',
            primaryKey: true
        },

    nombre: {
            type: 'string',
            required: true
        },
    A_Paterno:{
        
    },  
      matricula: {
            type: 'int',
            primaryKey: true
        },
      matricula:{
          model:'alumno'
      },
      profesores:{
          collection:'profesor',
          via:'id_materia',
          through:'imparte_materia'
          
      }
      
  }
};


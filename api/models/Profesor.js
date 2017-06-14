/**
 * Profesor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
autoCreatedAt: false,
autoUpdatedAt: false,
    
  attributes: {
matricula: {
            type: 'string',
            primaryKey: true
        },

    nombre: {
            type: 'string',
            required: true
        },

    A_Paterno: {
            type: 'string',
            required: true
        },

    A_Materno: {
            type: 'string',
            required: true
        },


    genero: {
            type: 'string',
            required: true
        },


    fecha_nacimiento: {
            type: 'date',
            required: true
        },


    direccion: {
            type: 'string',
            required: true
        },

   email: {
            type: 'string',
            required: true
        },


    telefono: {
            type: 'string',
            required: true
        },
      
      materias:{
       collection:'materia',
          via:'id_profesor',
          through:'imparte_materia'
     }
  }
};


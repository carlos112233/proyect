/**
 * Carrera.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
autoCreatedAt: false,
autoUpdatedAt: false,
  attributes: {
     id_carrera: {
            type: 'string',
            primaryKey: true
        },

    nombre: {
            type: 'string',
            required: true
        },  
      
      carreras: {
      collection: 'alumno',
      via: 'cursa'
    }

  }
  
};


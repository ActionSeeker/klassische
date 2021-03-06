const { expect } = require('chai');
const { Determiner } = require('../../dist/class/util/determiner');
const { TYPES } = require('../utils/types');

const determiner = new Determiner();
let list;

describe('Klassiche parsing tests', () => {
    it('Should  return PURE breed for a homogenous, non null list of basic types', () => {
        list = [34, 12, 89, 100, 52, 34, 88];
        expect(determiner.getBreed(list)).to.equal(Determiner.PURE);
        expect(determiner.getBreedType()).to.equal(TYPES.NUMBER);
    });

    it('Should  return PURE breed for a homogenoous, non null list of object types', () => {
        list = [{}, {}, {}, {}, {}];
        expect(determiner.getBreed(list)).to.equal(Determiner.PURE);
        expect(determiner.getBreedType()).to.equal(TYPES.OBJECT);
    });

    it('Should  return MIXED breed for a heterogenous, non null list', () => {
        list = [{}, 4, null, "BMW", false];
        expect(determiner.getBreed(list)).to.equal(Determiner.MIXED);
    });

    it('Should return NULL breed for list of nulls', () => {
        list = [null, null, null, null];
        expect(determiner.getBreed(list)).to.equal(Determiner.NULL);
    });
});
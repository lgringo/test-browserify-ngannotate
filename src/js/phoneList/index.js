"use strict"

var phoneListCtrl = require('./PhoneListController');

angular
	.module('phoneList', [])
	.controller('PhoneListController', ['$scope', phoneListCtrl]);


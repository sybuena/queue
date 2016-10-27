<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

	/* Constants
    -------------------------------*/

    /* Public Properties
    -------------------------------*/

    /* Protected Properties
    -------------------------------*/

    /* Private Properties
    -------------------------------*/

    /* Constructor
    -------------------------------*/    
	public function __construct() {

        parent::__construct();

    }

    /* Public Function
    -------------------------------*/
	public function index() {

		$data['home'] = 'active';

		$this->load->view('home', $data);
	}
	
	public function about() {
		$data['about'] = 'active';
		
		$this->load->view('about', $data);
	}

	public function contact() {
		$data['contact'] = 'active';

		$this->load->view('contact', $data);
	}
	public function test() {
		$this->load->view('test');	
	}

	/* Protected Function
    -------------------------------*/

    /* Private Function
    -------------------------------*/
}

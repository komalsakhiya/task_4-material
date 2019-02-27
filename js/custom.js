mdc.autoInit();

var drawer = new mdc.drawer.MDCDrawer(document.querySelector('.mdc-drawer'));
const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
	drawer.open = !drawer.open;
});
// mdc.tabBar.MDCTabBar.attachTo(document.querySelector('.mdc-tab-bar'));

mdc.textField.MDCTextField.attachTo(document.querySelector('.my-text-1'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.my-text-2'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.my-text-3'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.my-text-4'));
 mdc.textField.MDCTextField.attachTo(document.querySelector('.my-text-5'));
  mdc.textField.MDCTextField.attachTo(document.querySelector('.my-text-6'));

 
const dialog = new mdc.dialog.MDCDialog.attachTo(document.querySelector('.firstbtn'));

$('#pop_up').on('click',function(){

	dialog.open();
	// evt.preventDefault();
	console.log("accepted");
});
$('.canclebtn').on('click',function(){
	dialog.close();
});
const snackbar1 = new mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar--stacked'));
function sankbar(){
	snackbar1.open();
	// evt.preventDefault();
	console.log("accepted");


}
const snackbar2 = new mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.snacbar'));
function sankbar1(){
	snackbar2.open();
	// evt.preventDefault();
	console.log("accepted");


}
$("#close_pop_up").on('click',function(){
	dialog.close();
});


const menu = new mdc.menu.MDCMenu.attachTo(document.querySelector('.mdc-menu'));
// menu.open = true;
$('#menubtn').on('click',function(){
	menu.open = !menu.open;
	// menu.open();
	// evt.preventDefault();
	console.log("accepted");

});
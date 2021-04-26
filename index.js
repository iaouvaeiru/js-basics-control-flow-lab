function scuberGreetingForFeet(rideDistance){
  if (rideDistance <= 400) {
    return 'This one is on me!'
  } else if (rideDistance >= 2500) {
    return 'No can do.'
  } else {
    return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(isNYC) {
  return (isNYC === 'NYC' ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(Tip){
  switch (Tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}
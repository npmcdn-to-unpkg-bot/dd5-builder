export var races = [
  {
    label: 'Demi-elfe',
    bonus: '+2cha, +1 à deux autres carac',
    racial: 1
  }, {
    label: 'Demi-orque',
    bonus: '+2for, +1con',
    racial: 2
  }, {
    label: 'Drakéide',
    bonus: '+2for, +1cha',
    racial: 3
  }, {
    label: 'Elfe',
    subraces: [
      {
        label: 'Elfe des bois',
        bonus: '+2dex, +1sag',
        racial: 4
      }, {
        label: 'Haut-elfe',
        bonus: '+2dex, +1int',
        racial: 5
      }
    ]
  }, {
    label: 'Gnome',
    subraces: [
      {
        label: 'Gnome des forêts',
        bonus: '+2int, +1dex',
        racial: 6
      }, {
        label: 'Gnome des roches',
        bonus: '+2int, +1con',
        racial: 7
      }
    ]
  }, {
    label: 'Halfelin',
    subraces: [
      {
        label: 'Halfelin corpulent',
        bonus: '+2dex, +1con',
        racial: 8
      }, {
        label: 'Halfelin pieds-léger',
        bonus: '+2dex, +1cha',
        racial: 9
      }
    ]
  }, {
    label: 'Humain',
    subraces: [
      {
        label: 'Humain',
        bonus: '+1 all',
        racial: 10
      }, {
        label: 'Humain (variante)',
        bonus: '+1 à deux carac, 1 compétence maitrisé, 1 don',
        racial: 14
      }
    ]
  }, {
    label: 'Nain',
    subraces: [
      {
        label: 'Nain des collines',
        bonus: '+2con, +1sag',
        racial: 11
      }, {
        label: 'Nain des montagnes',
        bonus: '+2con, +2for',
        racial: 12
      }
    ]
  }, {
    label: 'Tieffelin',
    bonus: '+2cha, +1int',
    racial: 13
  }
];

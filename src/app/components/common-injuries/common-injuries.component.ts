import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

interface Category {
  title: string;
  subtitle?: string;
  injuries: string[];
}
@Component({
  selector: 'app-common-injuries',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './common-injuries.component.html',
  styleUrl: './common-injuries.component.scss',
})
export class CommonInjuriesComponent {
  categories: Category[] = [
    {
      title: 'Συχνές παθήσεις σπονδυλικής στήλης',
      subtitle: '(Αυχένα, Θώρακα – Πλευρών, Οσφύος)',
      injuries: [
        'Οσφυϊκή ή αυχενική κήλη μεσοσπονδύλιου δίσκου',
        'Στένωση σπονδυλικού σωλήνα',
        'Θλάσεις, κακώσεις συνδέσμων',
        'Οσφυαλγία και ισχιαλγία',
        'Κακώσεις - θλάσεις πλευρών',
        'Κατάγματα σπονδύλων',
      ],
    },
    {
      title: 'Συχνές παθήσεις ώμου',
      injuries: [
        'Τενοντίτιδα στροφικού πετάλου ή δικεφάλου',
        'Κακώσεις ακρωμιοκλειδικής',
        'Αστάθεια - εξάρθρηματα',
        'Βλάβες SLAP, Bankart',
        'Ρήξεις επιχειλίου χόνδρου',
        'Ρήξεις στροφικού πετάλου ή δικεφάλου',
      ],
    },
    {
      title: 'Συχνές παθήσεις αγκώνα',
      subtitle: '',
      injuries: [
        'Επικονδυλίτιδα (tennis ή golfers elbow)',
        'Κάταγμα ή εξάρθρημα αγκώνα',
        'Συνδεσμικές κακώσεις αγκώνα',
        'Ωλένια νευρίτιδα',
        'Ορογονοθυλακίτιδα αγκώνα',
      ],
    },
    {
      title: 'Συχνές παθήσεις χεριού',
      injuries: [
        'Κατάγματα οστών (κερκίδας, ωλένης, καρπού, δακτύλων)',
        'Τενοντίτιδες εκτεινόντων – καμπτήρων μυών',
        'Κακώσεις τρίγωνου χόνδρου',
        'Σύνδρομο καρπιαίου σωλήνα',
        'Συνδεσμικές κακώσεις ή ρήξεις',
      ],
    },
    {
      title: 'Συχνές παθήσεις ισχίου',
      injuries: [
        'Σύνδρομο πρόσκρουσης ισχίου',
        'Ρήξεις επιχειλίου χόνδρου',
        'Μυϊκές θλάσεις προσαγωγών',
        'Μυικές θλάσεις καμπτήρων ισχίου',
        'Τροχαντιρίτιδα',
      ],
    },
    {
      title: 'Συχνές παθήσεις γόνατος',
      injuries: [
        'Ρήξη πρόσθιου χιαστού συνδέσμου',
        'Χονδροπάθεια επιγονατίδας',
        'Ρήξη έσω ή έξω πλαγίου συνδέσμου',
        'Ρήξη έσω ή έξω μηνίσκου',
        'Μυϊκές θλάσεις (τετρακεφάλου, οπίσθιων μηριαίων)',
      ],
    },
    {
      title: 'Συχνές παθήσεις ποδιού',
      injuries: [
        'Διάστρεμμα αστραγάλου (ποδοκνημικής)',
        'Κατάγματα (ποδοκνημικής, μεταταρσίων, δακτύλων)',
        'Τενοντίτιδα ή ρήξεις αχιλλείου τένοντα',
        'Μυϊκή θλάση γαστροκνημίου',
        'Πελματιαία απονευρωσίτιδα',
        'Αστάθεια ποδοκνημικής',
      ],
    },
  ];
}

package oslomet.webprog;

public class Kunde {
    private int id;
    private String navn;
    private String adresse;
    private int telefon;
    private int antall;

    private String epost;
    private String biletter;

    public Kunde() {
    }

    public Kunde(int id, String navn, String adresse, int telefon, int antall, String epost, String biletter) {
        this.id = id;
        this.navn = navn;
        this.adresse = adresse;
        this.telefon = telefon;
        this.antall = antall;
        this.epost = epost;
    }

    public String getBiletter() {

        return biletter;
    }

    public void setBiletter(String biletter) {
        if(biletter.equals("Moana"))
            this.biletter = "";
    else {
        this.biletter = biletter;
    }}


    public int getAntall() {
        return antall;
    }

    public void setAntall(int antall) {
        this.antall = antall;
    }

    public int getTelefon() {
        return telefon;
    }

    public void setTelefon(int telefon) {
        this.telefon = telefon;
    }
    public int getId() {
        return id;
    }


    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNavn() {
        return navn;
    }

    public void setNavn(String navn) {
        this.navn = navn;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }
}



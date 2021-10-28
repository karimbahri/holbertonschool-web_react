interface MajorCredits {
    credit: number;
    brand: 'Maj-Credit';
}
interface MinorCredits {
    credit: number;
    brand: 'Min-Credit';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credit: subject1.credit + subject1.credit,
        brand: 'Maj-Credit'
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credit: subject1.credit + subject1.credit,
        brand: 'Min-Credit'
    };
}

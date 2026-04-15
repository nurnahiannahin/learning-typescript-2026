type NumberDict = {[k: string]: number}

const counters: NumberDict = {}

counters['Likes'] = 3


// Feature Flag System
type FeatureFlags = {
    version: number;
    feature: {
        [key: string]: boolean
    }
};

const settings: FeatureFlags = {
    version: 2.0,
    feature: {
        enableDarkMode: true,
        enableBetachat: false
    }
}
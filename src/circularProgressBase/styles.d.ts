declare type StyleProp = {
    radius: number;
    rotation: number;
};
declare const styles: (props: StyleProp) => {
    container: {
        width: number;
        height: number;
    };
    valueContainer: {
        flex: number;
        alignItems: "center";
        justifyContent: "center";
    };
    rotatingContainer: {
        transform: {
            rotate: string;
        }[];
    };
};
export default styles;
//# sourceMappingURL=styles.d.ts.map
// formValidationMixin.js
export default {
  methods: {
    validateForm() {
      this.isFormValid = true;
      Object.keys(this.form).forEach((key) => {
        this.validateOneField(key);
      });
    },
    validateOneField(fieldName) {
      this.form[fieldName].isValid = this.form[fieldName].validator(
        this.form[fieldName]
      );
      if (this.form[fieldName].isValid === false) {
        this.isFormValid = false;
      }
    },
  },
};

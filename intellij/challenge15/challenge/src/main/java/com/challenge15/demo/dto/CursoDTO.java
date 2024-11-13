    package com.challenge15.demo.dto;

    import com.challenge15.demo.entity.AlunoEntity;
    import com.fasterxml.jackson.annotation.JsonIgnore;
    import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
    import jakarta.persistence.*;
    import lombok.Data;

    import java.util.Set;

    @Data
    public class CursoDTO {
        private Long id;
        private String nome;
        private String desc;

        @JsonIgnoreProperties("cursos")
        private Set<AlunoEntity> alunos;

    }

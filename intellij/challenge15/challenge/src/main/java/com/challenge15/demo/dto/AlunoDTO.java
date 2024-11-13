package com.challenge15.demo.dto;

import com.challenge15.demo.entity.CursoEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
public class AlunoDTO {
    private Long id;
    private String nome;
    private String email;

    @JsonIgnoreProperties("cursos")
    private Set<CursoEntity> cursos;
}
